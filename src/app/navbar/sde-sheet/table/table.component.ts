import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableComponent {
  // tableData = Table_Data;
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['name', 'topic'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: PeriodicElement | null;
}

export interface TableRow {
  problmeHeading: string;
  link_1:  string;
  link_2: string;
}

export interface TableData {
    tableHeading: string;
    linkHeading_1: string;
    linkHeading_2: string;
    tableRows: TableRow[];
}

export interface PeriodicElement {
  name: number;
  topic: string;
  data: TableData;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
      name: 1,
      topic: 'Array',
      data: {
        tableHeading: 'Problem',
        linkHeading_1: 'Link 1',
        linkHeading_2: 'Link 2',
        tableRows:[
          {
            problmeHeading: 'prb-1',
            link_1: 'a',
            link_2: 'b'
          },
          {
            problmeHeading: 'prb-1',
            link_1: 'a',
            link_2: 'b'
          },
          {
            problmeHeading: 'prb-1',
            link_1: 'a',
            link_2: 'b'
          },
        ]
      }
  },
  {
    name: 2,
    topic: ' Linked List',
    data: {
      tableHeading: 'Problem',
      linkHeading_1: 'Link 1',
      linkHeading_2: 'Link 2',
      tableRows:[
        {
          problmeHeading: 'prb-1',
          link_1: 'a',
          link_2: 'b'
        }
      ]
    }
  },
  {
    name: 3,
    topic: 'Greedy Algorithm',
    data: {
      tableHeading: 'Problem',
      linkHeading_1: 'Link 1',
      linkHeading_2: 'Link 2',
      tableRows:[
        {
          problmeHeading: 'prb-1',
          link_1: 'a',
          link_2: 'b'
        },
        {
          problmeHeading: 'prb-1',
          link_1: 'a',
          link_2: 'b'
        }
      ]
    }
  },
  {
    name: 4,
    topic: 'Greedy Algorithm',
    data: {
      tableHeading: 'Problem',
      linkHeading_1: 'Link 1',
      linkHeading_2: 'Link 2',
      tableRows:[
        {
          problmeHeading: 'prb-1',
          link_1: 'a',
          link_2: 'b'
        },
        {
          problmeHeading: 'prb-1',
          link_1: 'a',
          link_2: 'b'
        }
      ]
    }
  },
  {
    name: 5,
    topic: 'Greedy Algorithm',
    data: {
      tableHeading: 'Problem',
      linkHeading_1: 'Link 1',
      linkHeading_2: 'Link 2',
      tableRows:[
        {
          problmeHeading: 'prb-1',
          link_1: 'a',
          link_2: 'b'
        },
        {
          problmeHeading: 'prb-1',
          link_1: 'a',
          link_2: 'b'
        }
      ]
    }
  },
  {
    name: 6,
    topic: 'Greedy Algorithm',
    data: {
      tableHeading: 'Problem',
      linkHeading_1: 'Link 1',
      linkHeading_2: 'Link 2',
      tableRows:[
        {
          problmeHeading: 'prb-1',
          link_1: 'a',
          link_2: 'b'
        },
        {
          problmeHeading: 'prb-1',
          link_1: 'a',
          link_2: 'b'
        }
      ]
    }
  },
  {
    name: 7,
    topic: 'Greedy Algorithm',
    data: {
      tableHeading: 'Problem',
      linkHeading_1: 'Link 1',
      linkHeading_2: 'Link 2',
      tableRows:[
        {
          problmeHeading: 'prb-1',
          link_1: 'a',
          link_2: 'b'
        },
        {
          problmeHeading: 'prb-1',
          link_1: 'a',
          link_2: 'b'
        }
      ]
    }
  },
  {
    name: 8,
    topic: 'Greedy Algorithm',
    data: {
      tableHeading: 'Problem',
      linkHeading_1: 'Link 1',
      linkHeading_2: 'Link 2',
      tableRows:[
        {
          problmeHeading: 'prb-1',
          link_1: 'a',
          link_2: 'b'
        },
        {
          problmeHeading: 'prb-1',
          link_1: 'a',
          link_2: 'b'
        }
      ]
    }
  },
  {
    name: 9,
    topic: 'Greedy Algorithm',
    data: {
      tableHeading: 'Problem',
      linkHeading_1: 'Link 1',
      linkHeading_2: 'Link 2',
      tableRows:[
        {
          problmeHeading: 'prb-1',
          link_1: 'a',
          link_2: 'b'
        },
        {
          problmeHeading: 'prb-1',
          link_1: 'a',
          link_2: 'b'
        }
      ]
    }
  },
  {
    name: 10,
    topic: 'Greedy Algorithm',
    data: {
      tableHeading: 'Problem',
      linkHeading_1: 'Link 1',
      linkHeading_2: 'Link 2',
      tableRows:[
        {
          problmeHeading: 'prb-1',
          link_1: 'a',
          link_2: 'b'
        },
        {
          problmeHeading: 'prb-1',
          link_1: 'a',
          link_2: 'b'
        }
      ]
    }
  }
];
