// Define a Node class to represent each element in the linked list
class Node {
    constructor(item, next = null) {
        this.item = item; // item stored in the node
        this.next = next; // Pointer to the next node in the list
    }
}

// Define a LinkedList class to manage the list
class LinkedList {
    constructor() {
        this.head = null; // Initialize the head of the list
    }

    // Insert a new node at the beginning of the list
    insertFirst(item) {
        this.head = new Node(item, this.head);
    }

    // Insert a new node at the end of the list
    insertLast(item) {
        let newNode = new Node(item);
        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }


    // Remove the first node from the list
    removeFirst() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
    }

    // Remove the last node from the list
    removeLast() {
        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let current = this.head;
        let previous = null;
        while (current.next) {
            previous = current;
            current = current.next;
        }
        previous.next = null;
    }

    // Remove a node at a specific index
    removeAt(index) {
        if (index === 0 && this.head) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        let previous = null;
        let counter = 0;

        while (current && counter < index) {
            previous = current;
            current = current.next;
            counter++;
        }

        if (!current) {
            console.log(`Index ${index} is out of bounds.`);
            return;
        }

        previous.next = current.next;
    }

    // Get the size of the linked list
    size() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }

    // Clear the linked list
    clear() {
        this.head = null;
    }

    // Print the linked list
    printList() {    
        const listContainer = document.getElementById('listContainer');
        const ul = document.createElement('ul');
        let current = this.head;
        let output = 'Linked List: ';
        while (current) {
            output += `${current.item} -> `;
            current = current.next;

        } 
        output+=null;
        const li = document.createElement('li');
        li.textContent = output;
        ul.appendChild(li);
        listContainer.innerHTML = '';
        listContainer.appendChild(ul);
    }

}


function addTask(){
    
    db.insertLast(itemtoadd.value);
    Files.write(Paths.get("list.txt"),itemtoadd.getBytes(), StandardOpenOption.APPEND);
}


function keyPressed(k) {
    if (k.code == 'Enter')     // only if the key is "Enter"...
        addTask();
    if (k.code == 'Space')
        db.printList();                 // ...add a new task (using same handler as the button)
    return false;               // no propagation or default
}




var itemtoadd=document.getElementById("itemtoadd");
const db= new LinkedList();
db.insertFirst("pool table");
db.insertLast("fridge");

itemtoadd.addEventListener("keypress", keyPressed)

