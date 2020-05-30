function BinarySearchTree() {
    // root属性
    this.root = null

    // 节点
    function Node(key) {
        this.key = key
        this.left = null
        this.right = null
    }

    // 插入数据
    BinarySearchTree.prototype.insert = function (key) {
        // 根据key创建节点
        let newNode = new Node(key)
        // 判断是否存在根节点
        if (this.root == null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    BinarySearchTree.prototype.insertNode = (node, newNode) => {
        /**
         * node: 和新节点比较的node
         * newNode: 新节点
         */
        if (newNode.key < node.key) {
            // 向左查找
            // 左子节点为空
            if (node.left == null) {
                node.left = newNode
            }else {
                this.insertNode(node.left, newNode)
            }
        }else {
            // 向右查找
            // 右节点为空
            if (node.right == null) {
                node.right = newNode
            }else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    // 先序遍历的实现
    BinarySearchTree.prototype.preOrderTraversal = (handler) => {
        this.preOrderTraversalNode(this.root, handler)
    }
    // 第一次：node 根节点
    // 第二次：node 左节点
    // 第三次: node 左节点的左节点
    // 第四次：node左节点的左节点的左节点
    BinarySearchTree.prototype.preOrderTraversalNode = (node, handler) => {
        if (node == null) {
            return
        }else {
            // 1。处理经过的节点
            handler(node.key)
            // 处理经过节点的左子节点
            this.preOrderTraversalNode(node.left, handler)
            // 处理经过节点的右子节点
            this.preOrderTraversalNode(node.right, handler)
        }
    }

    // 中序遍历
    BinarySearchTree.prototype.inOrderTraversal = (handler) => {
        this.inOrderTraversalNode(this.root, handler)
    }

    BinarySearchTree.prototype.inOrderTraversalNode = (node, handler) => {
        if (node != null) {
            this.inOrderTraversalNode(node.left, handler)
            handler(node.key)
            this.inOrderTraversalNode(node.right, handler)
        }
    }

    // 后序遍历
    BinarySearchTree.prototype.postOrderTraversal = (handler) => {
        this.postOrderTraversalNode(this.root, handler)
    }

    BinarySearchTree.prototype.postOrderTraversalNode = (node, handler) => {
        if (node != null) {
            this.postOrderTraversalNode(node.left, handler)
            this.postOrderTraversalNode(node.right, handler)
            handler(node.key)
        }
    }
}

// 测试代码
let binary_search_tree = new BinarySearchTree()
binary_search_tree.insert(11)
binary_search_tree.insert(7)
binary_search_tree.insert(15)
binary_search_tree.insert(5)
binary_search_tree.insert(3)
binary_search_tree.insert(9)
binary_search_tree.insert(8)
binary_search_tree.insert(10)
binary_search_tree.insert(13)
binary_search_tree.insert(12)
binary_search_tree.insert(14)
binary_search_tree.insert(20)
binary_search_tree.insert(18)
binary_search_tree.insert(25)
binary_search_tree.insert(6)

// 测试
// let res = ''
// binary_search_tree.preOrderTraversal(function (key) {
//     res += key + ' '
// })
// console.log(res)

// let res = ''
// binary_search_tree.inOrderTraversal(function (key) {
//     res += key + ' '
// })
// console.log(res)

let res = ''
binary_search_tree.postOrderTraversal(function (key) {
    res += key + ' '
})

console.log(res)