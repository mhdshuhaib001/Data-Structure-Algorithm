class Graph{
    constructor(){
        this.list = {}
    }

    addVertex(vertex){
        if(!this.list[vertex]){
            this.list[vertex] = new Set()
        }
    }

    addEdge(vertex,edge){
        this.addVertex(vertex)
        this.addVertex(edge)
        this.list[vertex].add(edge)
    }

    remove(vertex,edge){
        this.list[vertex].delete(edge)
    }

    removeHelper(vertex){
        for(let edge of this.list[vertex]){
            this.remove(vertex,edge)
        }
        delete this.list[vertex]
    }


    display() {
        for (const vertex in this.list) {
            console.log(vertex, "->", [...this.list[vertex]]);
        }
    }
    
    dfs(start){
        let stack = [];
        let visited = {};
    
        stack.push(start);
    
        while(stack.length){
            let vertex = stack.pop();
    
            if (!visited[vertex]) {
                console.log(vertex);
                visited[vertex] = true;
    
                for(let neighbor of this.list[vertex]){
                    if (!visited[neighbor]) {
                        stack.push(neighbor);
                    }
                }
            }
        }
    }


    bfs(start) {
        let queue = [];
        let visited = {};
    
        queue.push(start);
        visited[start] = true;
    
        while (queue.length) {
            let vertex = queue.shift();
            console.log(vertex);
    
            for (let neighbor of this.list[vertex]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true; 
                    queue.push(neighbor);   
                }
            }
        }
    }


 // ?Find the vertex with the maximum number of neighbors

    bfs(start) {
        const queue = [start];
        const visited = {};
        const neighborsCount = {};
        while (queue.length) {
            const vertex = queue.shift();
            visited[vertex] = true;

            neighborsCount[vertex] = this.list[vertex].size;
            for (const neighbor of this.list[vertex]) {
                if (!visited[neighbor]) {
                    queue.push(neighbor);
                }
            }
        }

        let centerVertex;
        let maxNeighbors = 0;
        for (const vertex in neighborsCount) {
            if (neighborsCount[vertex] > maxNeighbors) {
                maxNeighbors = neighborsCount[vertex];
                centerVertex = vertex;
            }
        }

        return centerVertex;
    }
    
    
    
}


const graph = new Graph()
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('F');


graph.addEdge('A','B')
graph.addEdge('B','C')
graph.addEdge('C','D')
graph.addEdge('D','A')

graph.dfs('A')
console.log('/////////////////////////////////////////////');

graph.bfs('A')