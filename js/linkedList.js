
class Node
{
    constructor(data)
    {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList
{
    constructor()
    {
        this.head = null;
        this.end = null
    }

    addToFront(data)
    {
        const nextNode = new Node(data);
        if(this.head)
        {
            nextNode.next = this.head;
            this.head.prev = nextNode;
        }
        this.head = nextNode;
        if(!this.end)
        {
            this.end = nextNode;
        }
    }

    addToEnd(data)
    {
        const nextNode = new Node(data);
        if(this.end)
        {
            nextNode.next = this.end;
            this.head.prev = nextNode;
        }
        this.end = nextNode;
        if(!this.head)
        {
            this.head = nextNode;
        }
    }

    pollFront()
    {
        if(!this.head)
        {
            return null;
        }

        const polledNode = this.head;
        this.head = this.head.next;

        if(this.head)
        {
            this.head.prev = null;
        }

        if(polledNode == this.end)
        {
            this.end = this.end.next;
        }

        return polledNode.data;
    }

    pollEnd()
    {
        if(!this.end)
        {
            return null;
        }

        const polledNode = this.end;
        this.end = this.end.next;

        if(this.end)
        {
            this.end.prev = null;
        }

        if(polledNode == this.head)
        {
            this.head = this.head.next;
        }

        return polledNode.data;
    }

}