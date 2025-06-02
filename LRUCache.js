// Doubly linked list
class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
        this.head = new Node(null, null);
        this.tail = new Node(null, null);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    _remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    // add new node right after the head - head - new node - existing nodes
    _add(node) {
        node.prev = this.head
        node.next = this.head.next
        this.head.next.prev = node;
        this.head.next = node;
    }

    get(key) {
        if (!this.cache.has(key)) return -1;
        const node = this.cache.get(key);
        this._remove(node); // remove the node from the current position 
        this._add(node) // add this node at the start of the linked list because that element will be LRU
        return node.value
    }

    put(key, value) {
        if (this.cache.has(key)) {
            // if the key already exists, remove the old key(node) from the list
            this._remove(this.cache.get(key))
        }

        // add new node at the start
        const node = new Node(key, value);
        this._add(node);

        // store node in map
        this.cache.set(key, node);

        // if cache reached its capacity remove the LRU node
        if (this.cache.size > this.capacity) {
            const lru = this.tail.prev;
            this._remove(lru) // remove node from list
            this.cache.delete(lru.key); // remove node from map cache
        }
    }
}

function execute(operations) {
    let lru;
    const output = [];

    for (const op of operations) {
        const [command, ...args] = op;

        if (command === "LRUCache") {
            lru = new LRUCache(...args);
            output.push(null);
        } else if (command === "put") {
            lru.put(...args);
            output.push(null);
        } else if (command === "get") {
            output.push(lru.get(...args));
        }
    }
    return output;
}