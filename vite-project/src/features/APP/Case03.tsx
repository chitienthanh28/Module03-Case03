import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAppSelector } from "./hook";
import { increment } from "./CounterSlice"
import { addToCart } from "./Case03Slice"
import "./Case03.css"

interface StyleBook {
  id: number;
  name: string;
  thumbnail: string;
  description: string;
  imgSrc: string;
  expiredAt: string;
  author: string;
}


function TestAPI() {
  const count = useAppSelector((state) =>state.counter.value);
  const dispatch = useDispatch();
  const [data, setData] = useState<StyleBook[]>([]);

  useEffect(() => {
    axios
      .get("https://65ad0b0dadbd5aa31bdff978.mockapi.io/api/books")
      .then((res: any) => {
        setData(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="D00">
        <div className="D01">
          <p>Issue Book</p>
          <span><button>+Create</button></span>
          <span><button>Import</button></span>
        </div>
        <div className="D02">
          <Link to={"/cart"}>
            <img
              id="imgG"
              src="https://salt.tikicdn.com/ts/upload/51/e2/92/8ca7e2cc5ede8c09e34d1beb50267f4f.png"
              alt=""
            />
          </Link>
          <span>
            <sup>{count}</sup>
          </span>
        </div>
      </div>

      <div className="D11">
        {data.map((item) => (
          <div key={item.id}>
            <div>
            <img src={item.thumbnail} alt=""  />
            </div>
            <div>
              <div>{item.name}</div>
              <div>{item.description}</div>
              <div>{item.expiredAt}</div>
              <div>{item.author}</div>
              <span><button
                onClick={() => {
                  dispatch(increment());
                  dispatch(addToCart(item));
                }}
              >
                ADD</button></span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default TestAPI;
