import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { RiAddLine, RiSubtractLine } from "@remixicon/react";

const CheckOut = () => {
    const rows = useSelector((state) => state.product.AddCart);
    const [quantities, setQuantities] = useState({});
    const [discount] = useState(0.05); // 5% discount

    const updateQuantity = (productId, quantity) => {
        setQuantities(prevState => ({
            ...prevState,
            [productId]: quantity
        }));
    };

    const subtractQuantity = (productId) => {
        if (quantities[productId] > 1) {
            updateQuantity(productId, quantities[productId] - 1);
        }
    };

    const addQuantity = (productId) => {
        updateQuantity(productId, (quantities[productId] || 0) + 1);
    };

    const calculateSubtotal = (price, quantity) => {
        return price * quantity;
    };

    const calculateTotal = () => {
        const subtotal = rows.reduce((total, row) => total + (row.price * (quantities[row.id] || 1)), 0);
        const discountAmount = subtotal * discount;
        return subtotal - discountAmount;
    };

    return (
        <div className="checkout">
            <h3 className="checkout_head">Shopping Bag</h3>
            <p className="checkout_para">There are {rows.length} items in the cart</p>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={8} md={8}>
                    <div className="checkout_card">
                        <TableContainer>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Product Names</TableCell>
                                        <TableCell>Product Image</TableCell>
                                        <TableCell>Price</TableCell>
                                        <TableCell>Quantity</TableCell>
                                        <TableCell>SubTotal</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.id}
                                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                        >
                                            <TableCell><p className="checkout_card_title">{row.productName}</p></TableCell>
                                            <TableCell component="th" scope="row">
                                                <img
                                                    src={row.productImg}
                                                    alt={row.productName}
                                                    className="checkout_card_img"
                                                />
                                            </TableCell>
                                            <TableCell><p className="checkout_card_text">${row.price}</p></TableCell>
                                            <TableCell style={{ maxWidth: "90px" }}>
                                                <div className="checkout_butns">
                                                    <div className="checkout_quantity_btns">
                                                        <button className="checkout_minus_btn" onClick={() => subtractQuantity(row.id)}>
                                                            <RiSubtractLine size={15} />
                                                        </button>
                                                        <p className="checkout_text_btn">{quantities[row.id] || 1}</p>
                                                        <button className="checkout_add_btn" onClick={() => addQuantity(row.id)}>
                                                            <RiAddLine size={15} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell><p className="checkout_card_text">${calculateSubtotal(row.price, quantities[row.id] || 1).toFixed(2)}</p></TableCell>
                                        </TableRow>
                                    ))}
                                    <TableRow>
                                        <TableCell rowSpan={rows.length + 1} />
                                        <TableCell colSpan={3}>Subtotal</TableCell>
                                        <TableCell align="right">${rows.reduce((total, row) => total + (row.price * (quantities[row.id] || 1)), 0).toFixed(2)}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <div className="checkout_card">
                        <h3 style={{ fontSize: "24px", marginBottom: "20px" }}>Payment</h3>
                        <div className="payment-item">
                            <h3>Sub Total</h3>
                            <p>${rows.reduce((total, row) => total + (row.price * (quantities[row.id] || 1)), 0).toFixed(2)}</p>
                        </div>
                        <div className="payment-item">
                            <h3>Discount</h3>
                            <p>{(discount * 100).toFixed(0)}%</p>
                        </div>
                        <div className="payment-item total">
                            <h3>Total with Discount</h3>
                            <p>${calculateTotal().toFixed(2)}</p>
                        </div>
                    </div>

                </Grid>
            </Grid>
        </div>
    );
};

export default CheckOut;
