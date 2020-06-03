import { createSlice } from "@reduxjs/toolkit";

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

const PRE_URL = "http://localhost:8080";

/* THUNKS */
export const login = (email, password) => {
  const LOGIN_URL = `${PRE_URL}/sessions`;
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
        console.log(json.name);
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
        //dispatch(user.actions.logout());
        dispatch(user.actions.setErrorMessage({ errorMessage: err }));
      });
  };
};

export const authorization = () => {
  const USERS_URL = `${PRE_URL}/users`;
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

export const signup = (name, email, password) => {
  const SIGNUP_URL = `${PRE_URL}/users`;
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
        console.log(json.name);
        dispatch(
          user.actions.setAccessToken({
            accessToken: json.accessToken,
          })
        );
        dispatch(
          user.actions.setUserId({
            userId: json.userId,
          })
        );
        dispatch(
          user.actions.setName({
            name: json.name,
          })
        );
      })
      .catch((err) => {
        dispatch(user.actions.logout());
        dispatch(user.actions.setErrorMessage({ errorMessage: err }));
      });
  };
};
// CREATES A NEW GRID FOR A USER
/* SEEMS TO BE WORKING */
export const createGrid = (gridName) => {
  const USERS_URL = `${PRE_URL}/users`;
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
        console.log(res);
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
// HELP!
export const usersGrids = () => {
  const USERS_URL = `${PRE_URL}/users`;
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
        console.log(json.createdGrids);

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

export const connectToGrid = () => {};

export const logout = () => {
  return (dispatch) => {
    localStorage.setItem("isSignedIn", JSON.stringify(false));
    dispatch(user.actions.setErrorMessage({ errorMessage: null }));
    dispatch(user.actions.setAccessToken({ accessToken: null }));
    dispatch(user.actions.setUserId({ userId: 0 }));
    dispatch(user.actions.setIsSignedIn({ isSignedIn: false }));
  };
};
