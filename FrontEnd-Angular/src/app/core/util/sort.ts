export class Sort {

    // sortOrder = 1 (asc)
    // sortOrder = -1 (desc)
    private sortOrder = 1;

    private collator = new Intl.Collator(undefined, {
        numeric: true,
        sensitivity: "base"
    });

    constructor() { }

    public startSort(property: string, dataOrder: string, dataType = "") {
        if(dataOrder === "desc") {
            this.sortOrder = -1;
        }
        return (a: any, b: any) => {
            if(dataType === "date") {
                return this.sortDate(new Date(a[property]), new Date(b[property]));
            }
            else {
                return this.collator.compare(a[property], b[property]) * this.sortOrder;
            }
        }
    }

    // comparator function
    private sortDate(a: any, b: any) {
        if(a < b) {
            return -1 * this.sortOrder;
        }
        else if(a > b) {
            return 1 * this.sortOrder;
        }
        else {
            return 0;
        }
    }
    
}