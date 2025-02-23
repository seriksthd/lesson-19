import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import { postToursRequest } from "../store/tour/tourThunk";
export default function TourForm() {
  const [tourValue, setTourValue] = useState({
    title: "",
    image: "",
    description: "",
    cost: "",
  });
  const dispatch = useDispatch();

  const handlerChageInput = (e) => {
    const { name, value } = e.target;
    setTourValue({ ...tourValue, [name]: value, id: Date.now().toString() });
  };

  const handlerSubmitTiur = (e) => {
    console.log(tourValue);
    e.preventDefault();

    if (
      !tourValue.title ||
      !tourValue.image ||
      !tourValue.description ||
      !tourValue.cost
    ) {
      return toast.error("заполните!!!");
    }
    dispatch(postToursRequest(tourValue));

    toast.success("Тур успешно создан !");
    setTourValue({
      title: "",
      image: "",
      description: "",
      cost: "",
    });
  };
  return (
    <div>
      <StyledForm onSubmit={handlerSubmitTiur}>
        <p>создайть тур</p>
        <input
          type="text"
          value={tourValue.title}
          onChange={handlerChageInput}
          name="title"
          placeholder="Названия тура"
        />
        <input
          type="text"
          value={tourValue.image}
          onChange={handlerChageInput}
          name="image"
          placeholder="Сылка на кортинку"
        />
        <input
          type="text"
          value={tourValue.description}
          onChange={handlerChageInput}
          name="description"
          placeholder="Описания тура"
        />
        <input
          type="number"
          value={tourValue.cost}
          onChange={handlerChageInput}
          name="cost"
          placeholder="Стойимост"
          min={0}
        />
        <button type="submit">Создайть</button>
      </StyledForm>
      <ToastContainer />
    </div>
  );
}
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid #333;
  border-radius: 5px;
  width: 500px;
  margin: 0 auto;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  margin-top: 30px;
  margin-bottom: 30px;
  & > input {
    padding: 5px 10px;
    border: 1px solid #333;
    border-radius: 5px;
    width: 100%;
  }

  & > button {
    padding: 5px 10px;
    border: 1px solid #333;
    color: #fff;
    background-color: #333;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: #fff;
      color: #333;
    }
  }
`;
