import React, { useCallback } from "react";
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  useEdgesState,
  useNodesState,
} from "reactflow";

import "reactflow/dist/style.css";
import AddLeadSource from "./workflows/AddLeadSource";

const nodeTypes = {
  addLeadSource: AddLeadSource,
};

const initialNodes = [
  {
    id: "1",
    type: "addLeadSource",
    data: {
      text: "Add Lead Source",
      description: "Click To Add Leads From List Of CRM",
    },
    position: { x: 0, y: 0 },
  },
  {
    id: "12",
    type: "addLeadSource",
    data: {
      text: "Add Lead Source",
      description: "Click To Add Leads From List Of CRM",
    },
    position: { x: 400, y: 0 },
  },
];

const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params) => {
    const edge = { ...params, animated: true, id: `${edges.length + 1}` };
    setEdges((eds) => addEdge(edge, eds));
  });

  React.useEffect(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        onConnect={onConnect}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
