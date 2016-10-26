# Bchu Datepicker
A React component for choosing dates and date ranges. customize from https://github.com/Adphorus/react-date-range

# Docs
### Disable specific date
Pass specific date that to need disable via props (PropsType.array)
ex.
```javascript
const disableDate = [
      moment("Nov 14 00:00:00", "MMM DD hh:mm:ss"),
      moment("Nov 15 00:00:00", "MMM DD hh:mm:ss"),
      moment("Nov 16 00:00:00", "MMM DD hh:mm:ss"),
      moment("Nov 17 00:00:00", "MMM DD hh:mm:ss")
    ];
```

and pass to component 

```javascript
<DateRange defineRange={ this.state.defineRange } disableDate={disableDate}/>
```
