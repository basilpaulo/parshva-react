import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import "./style.css";
import Modal from "../../Components/Modal";
const Docket = () => {
  const [formData, setFormData] = useState({
    name: "",
    startTime: "",
    endTime: "",
    hoursWorked: "",
    ratePerHour: "",
    supplierName: "",
    purchaseOrder: "",
  });
  const [supppliersData, setSuppliersData] = useState([]);
  const [supppliers, setSuppliers] = useState([]);
  const [purchaseOrder, sePurchaseOrder] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const supps = await (await fetch("http://localhost:9000/suppliers")).json();
    const suppliers = Object.keys(supps);
    suppliers.shift();
    setSuppliers(suppliers);
    setSuppliersData(supps);
  };
  const inputItems = [
    { label: "Name", id: "name" },
    { label: "Start Time", id: "startTime" },
    { label: "End Time", id: "endTime" },
    { label: "Hours Worked", id: "hoursWorked" },
    { label: "Rate Per Hour", id: "ratePerHour" },
  ];
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const onSubmit = () => {
    setOpen(true);
    console.log(formData);
  };
  const handleSupplierchange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    sePurchaseOrder(supppliersData[value]);
  };
  return (
    <div className="docket_main">
      <Typography variant="h4" component="h2">
        Submit Your Order
      </Typography>
      {inputItems.map((item) => (
        <TextField
          key={item.id}
          id={item.id}
          label={item.label}
          name={item.id}
          variant="outlined"
          onChange={handleChange}
        />
      ))}
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Supplier Name</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="supplierName"
          label="Supplier Name"
          name="supplierName"
          value={formData.supplierName}
          onChange={handleSupplierchange}
        >
          {supppliers.map((data) => (
            <MenuItem value={data}>{data}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Purchase Order</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="purchaseOrder"
          label="Purchase Order"
          name="purchaseOrder"
          onChange={handleChange}
        >
          {purchaseOrder.map((data) => (
            <MenuItem value={data[1]}>{data[1]}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button onClick={onSubmit} variant="contained">
        Submit
      </Button>
      <Modal
        inputItems={inputItems}
        formData={formData}
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
};

export default Docket;
