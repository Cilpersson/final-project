import { createSlice } from "@reduxjs/toolkit";
import { ui } from "./ui";

const initialState = {
  login: {
    accessToken: null,
    userId: 0,
    errorMessage: null,
    isSignedIn: false,
    name: null,
  },
  grid: {
    gridName: null,
    currentGrid: null,
    createdGrids: [],
    connectedGrids: [],
  },
};

export const user = createSlice({
  name: "user",
  initialState: initialState,

  reducers: {
    setAccessToken: (state, action) => {
      const { accessToken } = action.payload;
      state.login.accessToken = accessToken;
      localStorage.setItem("accessToken", action.payload);
    },
    setUserId: (state, action) => {
      const { userId } = action.payload;
      state.login.userId = userId;
    },
    setErrorMessage: (state, action) => {
      const { errorMessage } = action.payload;
      state.login.errorMessage = errorMessage;
    },
    setIsSignedIn: (state, action) => {
      const { isSignedIn } = action.payload;
      state.login.isSignedIn = isSignedIn;
      localStorage.setItem("isSignedIn", JSON.stringify(isSignedIn));
    },
    setName: (state, action) => {
      const { name } = action.payload;
      state.login.name = name;
    },
    setCurrentGrid: (state, action) => {
      const { currentGrid } = action.payload;
      state.grid.currentGrid = currentGrid;
    },
    setGridName: (state, action) => {
      const { gridName } = action.payload;
      state.grid.gridName = gridName;
    },
    setCreatedGrids: (state, action) => {
      const { createdGrids } = action.payload;
      state.grid.createdGrids = createdGrids;
    },
    setConnectedGrids: (state, action) => {
      const { connectedGrids } = action.payload;
      state.grid.connectedGrids = connectedGrids;
    },
  },
});

const API_URL = "http://localhost:8080";

/* THUNKS */

// USER LOGIN
export const login = (email, password) => {
  const LOGIN_URL = `${API_URL}/login`;
  return (dispatch) => {
    fetch(LOGIN_URL, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw "Unable to sign in, please try again.";
      })
      .then((json) => {
        dispatch(
          user.actions.setAccessToken({
            accessToken: json.accessToken,
          })
        );
        dispatch(
          user.actions.setUserId({
            userId: json.id,
          })
        );
        dispatch(
          user.actions.setName({
            name: json.name,
          })
        );
        dispatch(usersGrids());
      })
      .catch((err) => {
        dispatch(logout());
        dispatch(user.actions.setErrorMessage({ errorMessage: err }));
      });
  };
};

// AUTHORIZATION FOR SIGNUP AND LOGIN
export const authorization = () => {
  const USERS_URL = `${API_URL}/users`;
  return (dispatch, getState) => {
    const accessToken = getState().user.login.accessToken;
    const userId = getState().user.login.userId;
    fetch(`${USERS_URL}/${userId}/secure`, {
      method: "GET",
      headers: { Authorization: accessToken },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw "Could not get information. Make sure you are logged in and try again.";
      })
      .then((json) => {
        dispatch(user.actions.setIsSignedIn({ isSignedIn: true }));
        localStorage.setItem("isSignedIn", JSON.stringify(true));
      })
      .catch((err) => {
        dispatch(user.actions.setErrorMessage({ errorMessage: err }));
      });
  };
};

// CREATES A NEW USER
export const signup = (name, email, password) => {
  const SIGNUP_URL = `${API_URL}/signup`;
  return (dispatch) => {
    fetch(SIGNUP_URL, {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw "Unable to sign up, please try again.";
      })
      .then((json) => {
        dispatch(
          user.actions.setAccessToken({
            accessToken: json.accessToken,
          })
        );
        dispatch(
          user.actions.setUserId({
            userId: json._id,
          })
        );
        dispatch(
          user.actions.setName({
            name: json.name,
          })
        );
        dispatch(authorization());
      })
      .catch((err) => {
        dispatch(logout());
        // dispatch(user.actions.setErrorMessage({ errorMessage: err }));
      });
  };
};
// CREATES A NEW GRID FOR A USER
export const createGrid = (gridName) => {
  const USERS_URL = `${API_URL}/users`;
  return (dispatch, getState) => {
    const accessToken = getState().user.login.accessToken;
    const userId = getState().user.login.userId;
    const name = gridName;
    fetch(`http://localhost:8080/users/${userId}/grid`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
      body: JSON.stringify({ name: name }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw "Could not create grid, make sure you added all information";
      })
      .then((json) => {
        dispatch(
          user.actions.setGridName({
            name: json.name,
          })
        );
        dispatch(usersGrids());
      })
      .catch((err) => {
        dispatch(user.actions.setErrorMessage({ errorMessage: err }));
      });
  };
};

// RETURNS INFO ON ONE USERS GRIDS
export const usersGrids = () => {
  const USERS_URL = `${API_URL}/users`;
  return (dispatch, getState) => {
    const accessToken = getState().user.login.accessToken;
    const userId = getState().user.login.userId;

    fetch(`${USERS_URL}/${userId}`, {
      method: "GET",
      headers: { Authorization: accessToken },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw "Could not get user info.";
      })
      .then((json) => {
        dispatch(
          user.actions.setCreatedGrids({
            createdGrids: json.createdGrids,
          })
        );
        dispatch(
          user.actions.setConnectedGrids({
            connectedGrids: json.connectedGrids,
          })
        );
      })
      .catch((err) => {});
  };
};

//CONECTS A USER AND A GRID
export const connectToGrid = (gridAccessToken) => {
  const USERS_URL = `${API_URL}/users`;
  return (dispatch, getState) => {
    const accessToken = getState().user.login.accessToken;
    const userId = getState().user.login.userId;
    fetch(`${USERS_URL}/${userId}/connect`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
      body: JSON.stringify({ accessToken: gridAccessToken }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw "Could not create grid, make sure you added all information";
      })
      .then(() => {
        dispatch(usersGrids());
      })
      .catch((err) => {
        dispatch(user.actions.setErrorMessage({ errorMessage: err }));
      });
  };
};

// GET ONE GRIDS IMAGES
export const accessGrid = (accessTokenGrid) => {
  const USERS_URL = `${API_URL}/grids/grid`;
  return (dispatch, getState) => {
    const accessToken = getState().user.login.accessToken;
    fetch(`${USERS_URL}/${accessTokenGrid}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw "Could not access grid";
      })
      .then((json) => {
        dispatch(
          user.actions.setCurrentGrid({
            currentGrid: json,
          })
        );
      })
      .catch((err) => {
        // dispatch(user.actions.setErrorMessage({ errorMessage: err }));
      });
  };
};

//POST IMAGE TO GRID
export const postToGrid = (formData) => {
  const USERS_URL = `${API_URL}/users`;
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true));
    const accessToken = getState().user.login.accessToken;
    const gridAccessToken = getState().user.grid.currentGrid.accessToken;

    fetch(`${USERS_URL}/grid/post/${gridAccessToken}`, {
      method: "POST",
      // headers: {
      //   "Content-Type": "application/json",
      //   Authorization: accessToken,
      // },
      body: formData,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw "Could not post photo, make sure you added all information";
      })
      .then((json) => {
        dispatch(
          user.actions.setCurrentGrid({
            currentGrid: json,
          })
        );

        dispatch(ui.actions.setLoading(false));
        // dispatch(usersGrids());
      })
      .catch((err) => {
        // dispatch(user.actions.setErrorMessage({ errorMessage: err }));
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    localStorage.setItem("isSignedIn", JSON.stringify(false));
    dispatch(user.actions.setErrorMessage({ errorMessage: null }));
    dispatch(user.actions.setAccessToken({ accessToken: null }));
    dispatch(user.actions.setUserId({ userId: 0 }));
    dispatch(user.actions.setIsSignedIn({ isSignedIn: false }));
    dispatch(user.actions.setCurrentGrid({ currentGrid: null }));
    localStorage.clear();
  };
};
