import React from "react";
import swal from "sweetalert";
import { DeleteButton } from "./smallerComps/DeleteButton";
import { ShareGrid } from "components/ShareGrid";
import { useSelector, useDispatch } from "react-redux";
import { deleteGrid, leaveGrid } from "reducers/user";

export const CheckUsers = () => {
  const dispatch = useDispatch();
  const currentGrid = useSelector((store) => store.user.grid.currentGrid);
  const usersGrids = useSelector((store) => store.user.grid.createdGrids);

  const deleteGridOnClick = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this grid!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteGrid(currentGrid.accessToken));
        swal("Poof! Your grid has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Phew!", "Your grid is safe", "info");
      }
    });
  };

  const leaveGridOnClick = () => {
    swal({
      title: "Are you sure?",
      text:
        "Once you leave a grid you will need the grid link to connect to it again.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(leaveGrid(currentGrid.accessToken));
        swal("Poof! You have left the grid.", {
          icon: "success",
        });
      } else {
        swal("Phew!", "Your still connected to this grid.", "info");
      }
    });
  };

  const checkUser = () => {
    const gridCheck = usersGrids.filter(
      (grid) => grid.accessToken === currentGrid.accessToken
    );

    if (gridCheck.length === 0) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <>
      {checkUser() && <ShareGrid />}
      {checkUser() && (
        <DeleteButton
          onClick={() => deleteGridOnClick()}
          text="Delete grid"
          disabled={false}
          type="button"
        />
      )}
      {!checkUser() && (
        <DeleteButton
          onClick={() => leaveGridOnClick()}
          text="Leave grid"
          disabled={false}
          type="button"
        />
      )}
    </>
  );
};
