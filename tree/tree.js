class List {
    constructor(key) {
        this.key = key;
        this.left = this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    Add(key) {
        if (isNaN(key) || key === null) {
            console.log(`${key} - incorrect input!`);
            return;
        }
        if (this.root === null) {
            this.root = new List(key);
            console.log(`Key ${key} - root`);
        } else {
            let current = this.root,
                prev = null,
                find = false;
            while (current && !find) {
                prev = current;
                if (key == current.key) {
                    find = true;
                    console.log(`Key ${key} - dublicate key!`);
                } else {
                    if (key < current.key)
                        current = current.left;
                    else
                        current = current.right;
                }
            }
            if (!find) {
                console.log(`Add key ${key}`);
                current = new List(key);
                if (key < prev.key)
                    prev.left = current;
                else
                    prev.right = current;
            }
        }
    }

    Round(node) {
        console.log("\nRight-Center-Left");
        this.RCL(node);
        console.log("Left-Center-Right");
        this.LCR(node);
        console.log("Center-Left-Right");
        this.CLR(node);
    }

    Search(parent, key) {
        let current = this.root;
        while (current.key != key) {
            parent = current;
            if (key < current.key)
                current = current.left;
            else
                current = current.right;
            if (!current)
                return parent;
        }
        return current;
    }

    Remove(key) {
        let current = this.root,
            parent_rem_el = null,
            replace_el, parent_replace_el, rem_el;
        while (current.key != key) {
            parent_rem_el = current;
            if (key < current.key)
                current = current.left;
            else
                current = current.right;
            if (!current)
                break;
        }
        if (current)
            rem_el = current;
        else
            rem_el = parent_rem_el;
        if (rem_el == null) {
            cout << "\nNot found\n";
            return;
        }
        if (rem_el.left == null)
            replace_el = rem_el.right;
        else if (rem_el.right == null)
            replace_el = rem_el.left;
        else {
            parent_replace_el = rem_el;
            replace_el = rem_el.left;
            while (replace_el.right != null) {
                parent_replace_el = replace_el;
                replace_el = replace_el.right;
            }
            if (parent_replace_el == rem_el)
                replace_el.right = rem_el.right;
            else {
                replace_el.right = rem_el.right;
                parent_replace_el.right = replace_el.left;
                replace_el.left = parent_replace_el;
            }
        }
        if (rem_el == this.root)
            this.root = replace_el;
        else
        if (rem_el.key < parent_rem_el.key)
            parent_rem_el.left = replace_el;
        else
            parent_rem_el.right = replace_el;
        console.log(`\nDelete ${rem_el.key}`);
    }

    RCL(node) {
        if (node == null) return;
        this.RCL(node.right);
        this.RCL(node.left);
        console.log(node.key);
    }

    LCR(node) {
        if (node == null) return;
        this.LCR(node.left);
        console.log(node.key);
        this.LCR(node.right);
    }

    CLR(node) {
        if (node == null) return;
        console.log(node.key);
        this.CLR(node.left);
        this.CLR(node.right);
    }
}

let tree = new Tree();

tree.Add(1);
tree.Add(2);
tree.Add(3);
tree.Add(null);
tree.Add(undefined);
tree.Add("qwe");
tree.Add(-2);
tree.Add(-5);
tree.Add(-3);
tree.Add(-1);
tree.Add(4);
tree.Add(5);
tree.Add(3);

tree.Round(tree.root);

tree.Remove(3);
tree.Remove(1);
tree.Remove(4);

tree.Round(tree.root);
