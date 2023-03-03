import { InputNumber, Table } from "antd";
import React, { useState } from "react";
const RenderTimes = () => {
  const timesRef = React.useRef(0);
  timesRef.current += 1;
  return <span>{timesRef.current}</span>;
};

const shouldCellUpdate = (record, prevRecord) => record !== prevRecord;
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    shouldCellUpdate,
  },
  {
    title: "Age",
    dataIndex: "age",
    shouldCellUpdate,
  },
  {
    title: "Address",
    dataIndex: "address",
    shouldCellUpdate,
    render: (addr) => (
      <>
        {addr}
        <RenderTimes />
      </>
    ),
  },
];
function genData(count) {
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    });
  }
  return data;
}
const TableOne = () => {
  const [data, setData] = useState(genData(10));
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  return (
    <>
      <InputNumber
        value={data.length}
        onChange={(cnt) => {
          setData(genData(cnt || 0));
        }}
      />
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    </>
  );
};

export default TableOne;
