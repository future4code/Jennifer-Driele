
export class ListNode {
    constructor(
       public value: any,
       public next: ListNode | null = null
    ) { }

    // public setNext(node?: ) {
    //     this.next = node;
    //   }
    
    //   public getNext():  | undefined {
    //     return this.next;
    //   }
    
 }
 
 export const getNext: ListNode = new ListNode(
    "Cláudia",
    new ListNode(
       "Bruno",
       new ListNode(
          "Lucas",
          new ListNode(
             "Camila",
             new ListNode(
                "Deborah"
             )
          )
       )
    )
 )

 