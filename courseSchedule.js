/*

Course Schedule
Medium
Given numCourses and a list of prerequisite pairs where prerequisites[i] = [a, b] means course a depends on course b, determine if it's possible to finish all courses. Return true if possible, otherwise return false.

Example:
Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: Course 1 requires Course 0, so you can complete them in order.

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false

*/

const State = Object.freeze({
    TO_VISIT: 0,
    VISITING: 1,
    VISITED: 2
})

function isValidCourseSchedule(n, prerequisites) {

    function buildGraph() {
        const graph = new Map();
        for (const [course, prereq] of prerequisites) {
            if (!graph.has(prereq)) {
                graph.set(prereq, []);
            }
            graph.get(prereq).push(course)
        }
        return graph
    }

    const graph = buildGraph();
    const states = Array(n).fill(State.TO_VISIT);

    function dfs(start) {
        if (states[start] === State.VISITED) return true; // node is already visited
        if (states[start] === State.VISITING) return false; // cycle is found

        states[start] = State.VISITING;

        if (graph.get(start)) {
            for (let next of graph.get(start)) {
                if (!dfs(next)) return false;
            }
        }

        states[start] = State.VISITED;
        return true;
    }

    for (let i = 0; i < n; i++) {
        if (!dfs(i)) return false;
    }

}

// const n = 2
// const prerequisites = [[1, 0], [0, 1]]

const n = 4
const prerequisites = [[0, 1], [1, 2], [2, 3], [3, 1]]
console.log(isValidCourseSchedule(n, prerequisites));