// import { getNext,ListNode } from "./ListNode";

// export class LinkedList {
//   constructor
//   (public start?: ListNode
//     ) {}

//   public appendToTail(value: number) {
//     if (!this.start) {
//       this.start = new ListNode(value);
//     } else {
//       let node: ListNode = this.start;
//       while (node && node.getNext() !== undefined) {
//         node = node.getNext()!;
//       }
//       node.setNext(new ListNode(value));
//     }
//   }

//   public print(): void {
//     let node: ListNode | undefined = this.start;
//     let i = 1;
//     while (node !== undefined) {
//       console.log(`Elemento ${i}: `, node!.getData());
//       node = node!.getNext();
//       i++;
//     }
//   }
// }
