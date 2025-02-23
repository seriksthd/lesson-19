import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteToursRequest, getAllTours } from "../store/tour/tourThunk";
import { BeatLoader } from "react-spinners";

export default function TourList() {
  const { tours, isLoading, isError } = useSelector((store) => store.tours);
  const dispath = useDispatch();
  const deleteHandler = (id) => {
    dispath(deleteToursRequest(id));
  };
  useEffect(() => {
    dispath(getAllTours());
  }, []);
  return (
    <StyledTourList>
      {isLoading === true && <StyledLoader />}
      {isError  && <h1 color="red">{isError}</h1>}
      {tours.length > 0 ? (
        tours.map((tour) => (
          <TourCard key={tour.id}>
            <img src={tour.image} alt={tour.title} />
            <h3>{tour.title}</h3>
            <p>{tour.description}</p>
            <span>$ {tour.cost}</span>
            <button onClick={() => deleteHandler(tour.id)}>удалить</button>
          </TourCard>
        ))
      ) : (
        <h1>Пока нет доступных туров</h1>
      )}
    </StyledTourList>
  );
}

const StyledLoader = styled(BeatLoader)`
  position: absolute;
  left: 50%;
  top: 50%;
`;
const StyledTourList = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border-radius: 5px;
  & > h3 {
    text-align: center;
  }
  text-align: center;
`;

const TourCard = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  width: 500px;
  max-width: 70%;

  margin: auto;

  & > img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
  }
  &h3 {
    font-size: 18px;
    font-weight: 700;
    color: #333;
  }
  & > p {
    font-size: 14px;
    font-weight: 700;
    color: #333;
  }
  & > span {
    font-size: 14px;
    font-weight: 700;
    color: #333;
  }
  & > button {
    width: 100%;
    padding: 20px;
    background-color: #333;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    border: 1px solid #333;
    transition: all 250ms ease-in-out;
    &:hover {
      background-color: #fff;
      color: #333;
      border: 1px solid #333;
    }
  
}

`;
