function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function visualizeBFS(graph, startNode) {
    // queue for storing nodes to explore
    let queue = [startNode];
    // set to mark visited nodes
    let visited = new Set();
    
    while (queue.length > 0) {
        console.log('Queue:', queue);
        let currentNode = queue.shift(); // dequeue the front node

        if (!visited.has(currentNode)) {
            console.log(currentNode);
            visited.add(currentNode);

            // Highlight the current node
            document.getElementById(currentNode).classList.add('visited');

            // Pause to visualize the process
            await sleep(1000);

            let neighbors = graph[currentNode];
            for (let neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor); // enqueue the neighbors
                }
            }
        }
    }
}

// Example graph
const graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F', 'G'],
    'D': ['H'],
    'E': [],
    'F': [],
    'G': [],
    'H': []
};

// Start visualization from node 'A'
visualizeBFS(graph, 'A');
