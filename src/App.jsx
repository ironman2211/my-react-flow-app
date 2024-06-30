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
import LeadSource from "./workflows/LeadSource";
import AddBlock from "./workflows/AddBlock";
import SequenceStart from "./workflows/SequenceStart";

const nodeTypes = {
  addLeadSource: AddLeadSource,
  leadSource: LeadSource,
  sequenceStart: SequenceStart,
  addBlock: AddBlock,
};

const initialNodes = [
  {
    id: "1",
    type: "addLeadSource",
    data: {
      text: "Add Lead Source",
      description: "Click To Add Leads From List Of CRM",
    },
    position: { x: 400, y: 0 },
  },
  {
    id: "13",
    type: "sequenceStart",
    data: {
      label: "Sequence Start Piont",
    },
    position: { x: 70, y: 120 },
  },
  {
    id: "14", // Add Block
    type: "addBlock", // Add Block
    position: { x: 120, y: 230 }, // Add Block
  },
];

const initialEdges = [{ id: "e13-14", source: "13", target: "14" ,animated: true}];

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
