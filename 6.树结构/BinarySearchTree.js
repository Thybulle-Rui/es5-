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
