import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components";
import db from "../firebase";
import Button from "./common/Button";

function Plans() {
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        async function getPlans() {
            const querySnapshot = await getDocs(
                await query(
                    collection(db, "products"),
                    where("active", "==", true)
                )
            );
            const products = {} as any;
            querySnapshot.forEach(async (productDoc) => {
                products[productDoc.id] = productDoc.data();
                const priceSnap = await getDocs(
                    collection(productDoc.ref, "prices")
                );
                priceSnap.forEach((price) => {
                    products[productDoc.id].price = {
                        priceId: price.id,
                        priceData: price.data(),
                    };
                });
            });
            setProducts(products);
        }
        getPlans();
    }, []);

    const loadCheckout = async (priceId: string) => {};

    return (
        <PlansWrap>
            {Object.entries(products).map(([productId, productData]) => {
                return (
                    <Plan key={productId}>
                        <div className='plan__info'>
                            <h5>{productData.name}</h5>
                            <h6>{productData.description}</h6>
                        </div>
                        <Button
                            onClick={() =>
                                loadCheckout(productData.prices.priceId)
                            }
                            value='Subscribe'
                        >
                            Subscribe
                        </Button>
                    </Plan>
                );
            })}
        </PlansWrap>
    );
}

export default Plans;

const PlansWrap = styled.div``;
const Plan = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    opacity: 0.8;
    &:hover {
        opacity: 1;
    }
    button {
        padding: 10px 20px;
        font-weight: 400;
        border: none;
        cursor: pointer;
    }
`;
