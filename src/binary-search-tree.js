const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    this._root = this.#appendNodeRecursion(this._root, data);
  }

  has(data) {
    return this.#isHasNodeRecursion(this._root, data);
  }

  find(data) {
    return this.#findNodeRecursion(this._root, data);
  }

  remove(data) {
    this._root = this.#removeNodeRecursion(this._root, data);


  }

  min(minNode = this._root) {
    if (!this._root) {
      return null;
    }

    while (minNode.left) {
      minNode = minNode.left;
    }

    return minNode.data;
  }

  max(maxNode = this._root) {
    if (!this._root) {
      return null;
    }

    while (maxNode.right) {
      maxNode = maxNode.right;
    }

    return maxNode.data;
  }

  #appendNodeRecursion(node, data) {
    if (!node) {
      return new Node(data);
    }

    if (data === node.data) {
      return node;
    }

    if (node.data < data) {
      node.right = this.#appendNodeRecursion(node.right, data);
    } else {
      node.left = this.#appendNodeRecursion(node.left, data);
    }

    return node;
  }
  #isHasNodeRecursion(node, data) {
    if (!node) {
      return false;
    }

    if (data === node.data) {
      return true;
    }

    if (node.data < data) {
      return this.#isHasNodeRecursion(node.right, data);

    } else {
      return this.#isHasNodeRecursion(node.left, data);
    }
  }
  #findNodeRecursion(node, data) {
    if (!node) {
      return null;
    }

    if (data === node.data) {
      return node;
    }

    if (node.data < data) {
      return this.#findNodeRecursion(node.right, data);
    } else {
      return this.#findNodeRecursion(node.left, data);
    }
  }
  #removeNodeRecursion(node, data) {
    if (!node) {
      return null;
    }

    if (node.data > data) {
      node.left = this.#removeNodeRecursion(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.#removeNodeRecursion(node.right, data);
      return node;
    } else {

      if (!node.left && !node.right) {
        return null;
      }

      if (!node.left) {
        node = node.right;
        return node;
      }

      if (!node.right) {
        node = node.left;
        return node;
      }

      let rightMin = node.right;

      while (rightMin.left) {
        rightMin = rightMin.left;
      }

      node.data = rightMin.data;

      node.right = this.#removeNodeRecursion(node.right, rightMin.data);

      return node;
    }
  }
}

module.exports = {
  BinarySearchTree
};