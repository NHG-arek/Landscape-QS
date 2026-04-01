# Workbook Flow Reference

This document explains how the spreadsheet works as an estimating workflow for humans. It focuses on the operational flow between sheets and avoids database or migration detail.

## What The Workbook Does

The workbook starts with project inputs in `ESTIMATE BUILDER`, prices each accepted item through the `TASK` sheets, pulls material pricing from `COST ITEMS`, applies labour and profit rules from `MISC`, then produces project totals and procurement outputs.

## Main Sheets And Their Roles

| Sheet | Role in the flow |
|---|---|
| `ESTIMATE BUILDER` | Main estimating sheet. Holds project info, selected items, quantities, parameters, accept flags, and project totals. |
| `TASK 1-12` | Pricing engine. Each task code has a template with materials, labour, and formulas. |
| `COST ITEMS` | Master material catalogue with supplier, unit, and unit price. |
| `MISC` | Global settings such as labour rate, tariff/profit factor, and project duration logic. |
| `Current Rollups` | Dropdown options for detailed task parameters such as heights, types, and options. |
| `GENERAL ROLLUPS` | Dropdown options for general controls such as difficulty, price range, tariff, and yes/no. |
| `MATERIAL LIST DATABASE` | Internal aggregation of material demand from task calculations. |
| `MATERIALS MAIN` | Human-facing project material list for procurement. |
| `ADD MATERIALS` | Manual add-on materials not covered by standard task templates. |
| `SUBCONTRACT PROPOSAL` | Alternative subcontractor pricing view. Not the main estimating engine. |
| `notes` | Reference notes for estimators. Helpful context, not a calculation driver. |

## High-Level Flow

```text
+------------------+
| Project inputs   |
| ESTIMATE BUILDER |
+---------+--------+
          |
          v
+------------------+      +------------------+
| Task templates   |<-----| COST ITEMS       |
| TASK 1-12        |      | prices/materials |
+---------+--------+      +------------------+
          |
          v
+------------------+      +------------------+
| Cost results     |<---->| MISC             |
| back to estimate |      | labour/profit    |
+---------+--------+      +------------------+
          |
          v
+------------------+
| Accepted project |
| totals           |
+----+--------+----+
     |        |
     v        v
+---------+  +------------------+
| MATERIAL|  | SUBCONTRACT       |
|S MAIN   |  | PROPOSAL          |
+---------+  +------------------+
```

## Practical Estimating Flow

1. Enter project information in `ESTIMATE BUILDER`.
2. Set the tariff, team size, distance to site, and total area.
3. Add line items in the relevant sections of `ESTIMATE BUILDER`.
4. For each item, choose a task code and enter the quantity.
5. Set any required parameters such as thickness, height, difficulty, or price range.
6. Mark the item as accepted if it should count toward the quote.
7. The workbook sends the quantity and parameters into the relevant `TASK` block.
8. The `TASK` block prices materials and labour, then applies profit.
9. The calculated result returns to `ESTIMATE BUILDER` and updates section totals and grand totals.
10. Material demand is rolled up into `MATERIAL LIST DATABASE` and exposed in `MATERIALS MAIN`.
11. Any special materials can be added manually in `ADD MATERIALS`.

## The Core Calculation Loop

Each accepted estimating item follows the same pattern.

```text
+------------------------------+
| ESTIMATE BUILDER item        |
| code + params + quantity     |
+--------------+---------------+
               |
               v
+------------------------------+
| Matching TASK template       |
| materials + labour formulae  |
+--------------+---------------+
               |
       +-------+-------+
       |               |
       v               v
+-------------+   +----------------+
| COST ITEMS  |   | MISC           |
| unit prices |   | labour/profit  |
+------+------+   +--------+-------+
       |                   |
       +---------+---------+
                 |
                 v
+------------------------------+
| Calculated task total        |
| materials + labour + profit  |
+--------------+---------------+
               |
               v
+------------------------------+
| Returned to ESTIMATE BUILDER |
| totals update                |
+------------------------------+
```

## What Happens Inside A Task

For a selected task code, the workbook calculates cost in this order:

1. Material usage per unit is multiplied by material unit price.
2. Material subtotal is adjusted by the price range factor.
3. Labour hours are multiplied by the hourly rate.
4. Labour is adjusted by the difficulty factor.
5. Materials and labour are added into a subtotal.
6. The tariff-driven profit factor is applied.
7. The final task total is sent back to `ESTIMATE BUILDER`.

In short:

```text
Material cost = usage x unit price
Materials total = sum(materials) x price range factor
Labour cost = hours x hourly rate x difficulty factor
Subtotal = materials + labour
Sell price = subtotal x profit factor
```

## Inputs That Change Pricing

These are the main user-controlled inputs that affect results:

| Input | Usually entered in | Effect |
|---|---|---|
| Task code | `ESTIMATE BUILDER` | Chooses which pricing template is used. |
| Quantity | `ESTIMATE BUILDER` | Drives total materials and labour required. |
| Thickness / height / similar task params | `ESTIMATE BUILDER` | Changes resource usage or labour logic depending on task type. |
| Difficulty | `ESTIMATE BUILDER` | Increases labour cost. |
| Price range | `ESTIMATE BUILDER` | Increases material cost. |
| Tariff | `ESTIMATE BUILDER` | Switches the project profit factor via `MISC`. |
| Accept yes/no | `ESTIMATE BUILDER` | Decides whether the item contributes to project totals. |
| Team size, area, distance | `ESTIMATE BUILDER` | Feeds project duration calculations in `MISC`. |

## Read/Send Behaviour

The workbook behaves like `ESTIMATE BUILDER` is calling the `TASK` sheets for pricing.

```text
+------------------+          +------------------+
| ESTIMATE BUILDER |          | TASK sheet block |
| quantity/length  |--------->| READ input       |
| params           |          | formulae run     |
|                  |<---------| SEND result      |
+------------------+          +------------------+
```

Operationally, that means:

- `ESTIMATE BUILDER` passes quantity and task parameters into the task block.
- The task block performs the calculation.
- The result is read back into the estimate line.

## Project Totals Flow

Only accepted items should count toward the main estimate.

```text
+------------------+
| Estimate items   |
| yes / no accept  |
+---------+--------+
          |
          v
+------------------+
| Accepted items   |
| only             |
+----+--------+----+
     |        |
     v        v
+---------+  +------------------+
| Section  |  | Grand totals     |
| totals   |  | net/gross/hours  |
+---------+  +------------------+
```

This applies across:

- Hires
- Ground preparation
- Linear objects
- Areal objects

## Materials Flow

The materials output is downstream of the estimate, not a separate input process.

```text
+------------------+
| Accepted priced  |
| estimate items   |
+---------+--------+
          |
          v
+------------------------+
| MATERIAL LIST DATABASE |
| internal aggregation   |
+---------+--------------+
          |
          v
+------------------+
| MATERIALS MAIN   |
| procurement list |
+---------+--------+
          |
          v
+------------------+
| ADD MATERIALS    |
| manual extras    |
+------------------+
```

In practice:

- Standard task materials are generated automatically from the priced estimate.
- `MATERIAL LIST DATABASE` consolidates demand across tasks.
- `MATERIALS MAIN` gives the usable list for ordering.
- `ADD MATERIALS` is used only for extra items outside the standard templates.

## Duration And Commercial Settings

`MISC` handles the project-wide rules that sit above individual tasks.

- Labour hourly rate is stored there.
- Tariff determines the profit factor.
- Team size, site area, and travel distance feed the duration calculation.
- Project hours from the estimate are buffered and converted into days.

```text
+------------------+
| ESTIMATE BUILDER |
| tariff/team/area |
| distance/hours   |
+---------+--------+
          |
          v
+------------------+
| MISC             |
| profit + days    |
+---------+--------+
          |
          v
+------------------+
| ESTIMATE BUILDER |
| totals + duration|
+------------------+
```

## How To Read The Workbook As A Human

If you need to understand or explain the workbook quickly, use this mental model:

- `ESTIMATE BUILDER` is the front door.
- `TASK 1-12` is the calculator behind the scenes.
- `COST ITEMS` is the price book.
- `MISC` is the global rules sheet.
- `MATERIALS MAIN` is the buying list.
- `SUBCONTRACT PROPOSAL` is a side output, not the primary quote.

## What To Ignore In A Human Workflow Overview

These details exist, but they are not central to a human process explanation:

- Database migration proposals
- Schema definitions
- Spare or test sheets such as `Sheet1`, `Sheet2`, and empty `Sheet4`
- Low-level duplicate `TASK` sheet structure unless you are debugging formulas

## One-Line Summary

The workbook flow is: define project and scope in `ESTIMATE BUILDER`, let `TASK` sheets price each item using `COST ITEMS` and `MISC`, then use the accepted outputs for totals, duration, and procurement.
