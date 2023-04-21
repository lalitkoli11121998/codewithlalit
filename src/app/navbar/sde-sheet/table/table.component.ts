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
  problemName: string;
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
        linkHeading_1: 'Practice Link 1',
        linkHeading_2: 'Practice Link 2',
        tableRows:[
          {
            problemName: 'Number of Paths',
            problmeHeading: '',
            link_1: 'https://practice.geeksforgeeks.org/problems/number-of-paths0926/1',
            link_2: 'https://www.codingninjas.com/codestudio/problem-details/total-unique-paths_1081470'
          },
          {
            problemName: "Pascal's Triangle",
            problmeHeading: '',
            link_1: 'https://leetcode.com/problems/pascals-triangle/',
            link_2: 'https://www.codingninjas.com/codestudio/problems/1089580?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website'
          },
          {
            problemName: 'Next Permutation',
            problmeHeading: '',
            link_1: 'https://leetcode.com/problems/next-permutation/',
            link_2: 'https://www.codingninjas.com/codestudio/problems/893046?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website'
          },
          {
            problemName: "Sort an array of 0’s 1’s 2’s",
            problmeHeading: '',
            link_1: 'https://www.codingninjas.com/codestudio/problems/631055?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website',
            link_2: 'https://leetcode.com/problems/sort-colors/'
          },
          {
            problemName: 'Stock buy and Sell',
            problmeHeading: '',
            link_1: 'https://www.codingninjas.com/codestudio/problems/893405?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website',
            link_2: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/'
          }
        ]
      }
  },
  {
    name: 2,
    topic: ' Linked List',
    data: {
      tableHeading: 'Problem',
      linkHeading_1: 'Practice Link 1',
      linkHeading_2: 'Practice Link 2',
      tableRows:[
        {
          problemName: 'Reverse a LinkedList',
          problmeHeading: '',
          link_1: 'https://www.codingninjas.com/codestudio/problems/799897?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website',
          link_2: 'https://leetcode.com/problems/reverse-linked-list/'
        },
        {
          problemName: 'Remove N-th node from back of LinkedList',
          problmeHeading: '',
          link_1: 'https://www.codingninjas.com/codestudio/problems/799912?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website',
          link_2: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/'
        },
        {
          problemName: 'Add two numbers as LinkedList',
          problmeHeading: '',
          link_1: 'https://www.codingninjas.com/codestudio/problems/add-two-numbers-as-linked-lists_1170520?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website',
          link_2: 'https://leetcode.com/problems/add-two-numbers/'
        },
        {
          problemName: 'Find the starting point of the Loop of LinkedList',
          problmeHeading: '',
          link_1: 'https://www.codingninjas.com/codestudio/problems/1112628?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website',
          link_2: 'https://leetcode.com/problems/linked-list-cycle-ii/'
        },
        {
          problemName: '	Flattening of a LinkedList',
          problmeHeading: '',
          link_1: 'https://www.codingninjas.com/codestudio/problems/1112655?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website',
          link_2: 'https://practice.geeksforgeeks.org/problems/flattening-a-linked-list/1'
        }
      ]
    }
  },
  {
    name: 3,
    topic: 'Greedy Algorithm',
    data: {
      tableHeading: 'Problem',
      linkHeading_1: 'Practice Link 1',
      linkHeading_2: 'Practice Link 2',
      tableRows:[
        {
          problemName: '	N meetings in one room',
          problmeHeading: '',
          link_1: 'https://www.codingninjas.com/codestudio/problems/1062658?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website',
          link_2: 'https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1'
        },
        {
          problemName: 'Job sequencing Problem',
          problmeHeading: '',
          link_1: 'https://www.codingninjas.com/codestudio/problems/job-sequencing-problem_1169460?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website',
          link_2: 'https://practice.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1#'
        },
        {
          problemName: 'Fractional Knapsack Problem',
          problmeHeading: '',
          link_1: 'https://www.codingninjas.com/codestudio/problems/975286?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website',
          link_2: 'https://practice.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1'
        },
        {
          problemName: 'Greedy algorithm to find minimum number of coins',
          problmeHeading: '',
          link_1: 'https://www.codingninjas.com/codestudio/problems/975277?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website',
          link_2: 'https://www.geeksforgeeks.org/find-minimum-number-of-coins-that-make-a-change/'
        },
        {
          problemName: 'Minimum number of platforms required for a railway',
          problmeHeading: '',
          link_1: 'https://www.codingninjas.com/codestudio/problems/799400?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website',
          link_2: 'https://practice.geeksforgeeks.org/problems/minimum-platforms-1587115620/1#'
        }
      ]
    }
  },
  {
    name: 4,
    topic: 'Recursion',
    data: {
      tableHeading: 'Problem',
      linkHeading_1: 'Practice Link 1',
      linkHeading_2: 'Practice Link 2',
      tableRows:[
        {
          problemName: 'Subset Sums',
          problmeHeading: '',
          link_1: 'https://www.codingninjas.com/codestudio/problems/subset-sum_3843086?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website',
          link_2: 'https://practice.geeksforgeeks.org/problems/subset-sums2234/1'
        },
        {
          problemName: 'Combination sum-1',
          problmeHeading: '',
          link_1: 'https://www.codingninjas.com/codestudio/problems/759331?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website',
          link_2: 'https://leetcode.com/problems/combination-sum/'
        },
        {
          problemName: 'Combination sum-2',
          problmeHeading: '',
          link_1: 'https://www.codingninjas.com/codestudio/problems/1112622?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website',
          link_2: 'https://leetcode.com/problems/combination-sum-ii/'
        },
        {
          problemName: 'Palindrome Partitioning',
          problmeHeading: '',
          link_1: 'https://www.codingninjas.com/codestudio/problems/799931?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website',
          link_2: 'https://leetcode.com/problems/palindrome-partitioning/'
        },
        {
          problemName: 'K-th permutation Sequence',
          problmeHeading: '',
          link_1: 'https://www.codingninjas.com/codestudio/problems/1112626?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website',
          link_2: 'https://leetcode.com/problems/permutation-sequence/'
        }
      ]
    }
  },
  {
    name: 5,
    topic: 'Binary Search',
    data: {
      tableHeading: 'Problem',
      linkHeading_1: 'Practice Link 1',
      linkHeading_2: 'Practice Link 2',
      tableRows:[
        {
          problemName: 'Matrix Median',
          problmeHeading: '',
          link_1: 'https://www.codingninjas.com/codestudio/problems/873378?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website',
          link_2: 'https://www.interviewbit.com/problems/matrix-median/'
        },
        {
          problemName: 'Median of 2 sorted arrays',
          problmeHeading: '',
          link_1: 'https://www.codingninjas.com/codestudio/problems/985294?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website',
          link_2: 'https://leetcode.com/problems/median-of-two-sorted-arrays/'
        },
        {
          problemName: 'K-th element of two sorted arrays',
          problmeHeading: '',
          link_1: 'https://www.codingninjas.com/codestudio/problems/1112629?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website',
          link_2: 'https://practice.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array1317/1'
        },
        {
          problemName: 'Allocate Minimum Number of Pages',
          problmeHeading: '',
          link_1: 'https://www.codingninjas.com/codestudio/problems/ayush-gives-ninjatest_1097574?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website',
          link_2: 'https://www.interviewbit.com/problems/allocate-books/'
        },
        {
          problemName: 'Aggressive Cows',
          problmeHeading: '',
          link_1: 'https://www.codingninjas.com/codestudio/problems/chess-tournament_981299?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website',
          link_2: 'https://practice.geeksforgeeks.org/problems/aggressive-cows/1'
        }
      ]
    }
  },
  {
    name: 6,
    topic: 'Heaps',
    data: {
      tableHeading: 'Problem',
      linkHeading_1: 'Practice Link 1',
      linkHeading_2: 'Practice Link 2',
      tableRows:[
        {
          problemName: 'Kth Largest Element',
          problmeHeading: '',
          link_1: 'https://www.codingninjas.com/codestudio/problems/kth-smallest-and-largest-element-of-array_1115488?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website',
          link_2: 'https://leetcode.com/problems/kth-largest-element-in-an-array/'
        },
        {
          problemName: 'Maximum Sum Combination',
          problmeHeading: '',
          link_1: 'https://www.codingninjas.com/codestudio/problems/k-max-sum-combinations_975322?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website',
          link_2: 'https://www.interviewbit.com/problems/maximum-sum-combinations/'
        },
        {
          problemName: 'Find Median from Data Stream',
          problmeHeading: '',
          link_1: 'https://www.codingninjas.com/codestudio/problems/running-median_625409?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website',
          link_2: 'https://leetcode.com/problems/find-median-from-data-stream/'
        },
        {
          problemName: 'Merge K sorted arrays',
          problmeHeading: '',
          link_1: 'https://www.codingninjas.com/codestudio/problems/merge-k-sorted-arrays_975379?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website',
          link_2: 'https://leetcode.com/problems/merge-k-sorted-lists/'
        },
        {
          problemName: 'K most frequent elements',
          problmeHeading: '',
          link_1: 'https://www.codingninjas.com/codestudio/problems/k-most-frequent-elements_3167808?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website',
          link_2: 'https://leetcode.com/problems/top-k-frequent-elements/'
        }
      ]
    }
  },
  {
    name: 7,
    topic: 'Binary Tree',
    data: {
      tableHeading: 'Problem',
      linkHeading_1: 'Practice Link 1',
      linkHeading_2: 'Practice Link 2',
      tableRows:[
        {
          problemName: 'Preorder inorder postorder in a single traversal',
          problmeHeading: '',
          link_1: 'https://www.codingninjas.com/codestudio/problems/981269?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website',
          link_2: ''
        },
        {
          problemName: 'Diameter of Binary Tree',
          problmeHeading: '',
          link_1: 'https://www.codingninjas.com/codestudio/problems/920552?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website',
          link_2: 'https://leetcode.com/problems/diameter-of-binary-tree/'
        },
        {
          problemName: 'Check if two trees are identical or not',
          problmeHeading: '',
          link_1: 'https://www.codingninjas.com/codestudio/problems/799364?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website',
          link_2: 'https://leetcode.com/problems/same-tree/'
        },
        {
          problemName: 'Construct Binary Tree from Inorder and Postorder',
          problmeHeading: '',
          link_1: 'https://www.codingninjas.com/codestudio/problems/1266106?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website',
          link_2: 'https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/'
        },
        {
          problemName: '	Flatten Binary Tree to LinkedList',
          problmeHeading: '',
          link_1: 'https://www.codingninjas.com/codestudio/problems/1112615?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website',
          link_2: 'https://leetcode.com/problems/flatten-binary-tree-to-linked-list/'
        }
      ]
    }
  },
  {
    name: 8,
    topic: 'Binary Search Tree',
    data: {
      tableHeading: 'Problem',
      linkHeading_1: 'Practice Link 1',
      linkHeading_2: 'Practice Link 2',
      tableRows:[
        {
          problemName: 'Find LCA of two nodes in BST',
          problmeHeading: '',
          link_1: 'https://www.codingninjas.com/codestudio/problems/981280?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website',
          link_2: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/'
        },
        {
          problemName: 'Find K-th smallest element in BST',
          problmeHeading: '',
          link_1: 'https://www.codingninjas.com/codestudio/problems/920441?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website',
          link_2: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/'
        },
        {
          problemName: 'Binary Tree to Double Linked List',
          problmeHeading: '',
          link_1: 'https://www.codingninjas.com/codestudio/problems/893106?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website',
          link_2: 'https://leetcode.com/problems/flatten-binary-tree-to-linked-list/'
        },
        {
          problemName: 'BST iterator',
          problmeHeading: '',
          link_1: 'https://www.codingninjas.com/codestudio/problems/1112601?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website',
          link_2: 'https://leetcode.com/problems/binary-search-tree-iterator/'
        },
        {
          problemName: 'Check is a BT is BST or not',
          problmeHeading: '',
          link_1: 'https://www.codingninjas.com/codestudio/problems/799483?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website',
          link_2: 'https://leetcode.com/problems/validate-binary-search-tree/'
        }
      ]
    }
  },
  {
    name: 9,
    topic: 'Graph',
    data: {
      tableHeading: 'Problem',
      linkHeading_1: 'Practice Link 1',
      linkHeading_2: 'Practice Link 2',
      tableRows:[
        {
          problemName: 'DFS',
          problmeHeading: '',
          link_1: 'https://www.codingninjas.com/codestudio/problems/dfs-traversal_630462?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website',
          link_2: 'https://practice.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1'
        },
        {
          problemName: 'BFS',
          problmeHeading: '',
          link_1: 'https://www.codingninjas.com/codestudio/problems/bfs-in-graph_973002?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website',
          link_2: 'https://practice.geeksforgeeks.org/problems/bfs-traversal-of-graph/1'
        },
        {
          problemName: 'Dijkstra’s Algorithm',
          problmeHeading: '',
          link_1: 'https://www.codingninjas.com/codestudio/problems/920469?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website',
          link_2: 'https://practice.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1'
        },
        {
          problemName: 'Bellman-Ford Algo',
          problmeHeading: '',
          link_1: 'https://www.codingninjas.com/codestudio/problems/2041977?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website',
          link_2: 'https://practice.geeksforgeeks.org/problems/distance-from-the-source-bellman-ford-algorithm/0?fbclid=IwAR2_lL0T84DnciLyzMTQuVTMBOi82nTWNLuXjUgahnrtBgkphKiYk6xcyJU'
        },
        {
          problemName: 'MST using Prim’s Algo',
          problmeHeading: '',
          link_1: 'https://www.codingninjas.com/codestudio/problems/1095633?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website',
          link_2: 'https://practice.geeksforgeeks.org/problems/minimum-spanning-tree/1'
        }
      ]
    }
  },
  {
    name: 10,
    topic: 'Dynamic Programming',
    data: {
      tableHeading: 'Problem',
      linkHeading_1: 'Practice Link 1',
      linkHeading_2: 'Practice Link 2',
      tableRows:[
        {
          problemName: '0-1 Knapsack',
          problmeHeading: '',
          link_1: 'https://www.codingninjas.com/codestudio/problems/1072980?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website',
          link_2: 'https://practice.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1'
        },
        {
          problemName: 'Longest Common Subsequence',
          problmeHeading: '',
          link_1: 'https://www.codingninjas.com/codestudio/problems/624879?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website',
          link_2: 'https://leetcode.com/problems/longest-common-subsequence/'
        },
        {
          problemName: 'Coin change',
          problmeHeading: '',
          link_1: 'https://www.codingninjas.com/codestudio/problems/630471?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website',
          link_2: 'https://leetcode.com/problems/coin-change/'
        },
        {
          problemName: 'Rod Cutting',
          problmeHeading: '',
          link_1: 'https://www.codingninjas.com/codestudio/problems/800284?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website',
          link_2: 'https://leetcode.com/problems/minimum-cost-to-cut-a-stick/'
        },
        {
          problemName: 'Maximum profit in Job scheduling',
          problmeHeading: '',
          link_1: 'https://www.codingninjas.com/codestudio/problems/job-sequencing-problem_1169460?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website',
          link_2: 'https://practice.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1'
        }
      ]
    }
  }
];
