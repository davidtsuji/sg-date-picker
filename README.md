# sg_datePicker [data-sg-date-picker]

A JavaScript control that turns an input into a jQuery $.datePicker .. all without writing any JavaScript.

The markup controls which input element is activated by placing a data attribute on the element.

The jQuery datepicker is activated as soon as the input element gains focus.



## Usage

The attribute [data-sg-date-picker] is typically added to an input[type="text"]. The value must be compliant with jQuery's datepicker "dateFormat" e.g. "dd/mm/yy" (see the HTML Example).

["dateFormat":String]		An optional value format for the date



### HTML Example 1

The following is a very basic example of populating a UL LI list.

<input type="text" data-sg-date-picker='{ "dateFormat":"yy/mm/dd" }'>



## Requirements

1. jQuery 1.7.2
2. jQuery UI 1.8.21
3. jQuery UI theme (not included in this demo)
