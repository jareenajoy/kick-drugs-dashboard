import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';//Creates a slice of the Redux state with auto-generated actions and reducers.
//createAsyncThunk: Creates a thunk for async logic (like API calls).
import { fetchUsers } from '../services/api';
//fetchUsers: A function that fetches user data from an API (e.g., https://jsonplaceholder.typicode.com/users).
export const fetchStats = createAsyncThunk("stats/fetchStats", async () => {
  const users = await fetchUsers();//Calls the fetchUsers function and waits for the response.
  const total = users.length; //number of users
  const organizations = Math.floor(total * 0.2);//20% of users
  const men = Math.floor(total * 0.65);//65% of users
  const women = total - men;//rest of the users
  //Simulates last week's data by subtracting random small numbers from current values to imitate growth.

  //This is just mock data to test percentage calculations.
  const simulateLastWeek = {
    individuals: total - Math.floor(Math.random() * 5 + 1),
    organizations: organizations - Math.floor(Math.random() * 3 + 1),
    men: men - Math.floor(Math.random() * 4 + 1),
    women: women - Math.floor(Math.random() * 4 + 1),
  };
//A helper function to calculate percentage growth.
  const calculateGrowth = (current, previous) =>
    (((current - previous) / (previous || 1)) * 100).toFixed(1);//previous || 1 avoids division by zero.
//.toFixed(1) formats the result to 1 decimal place.
  return {
    current: { individuals: total, organizations, men, women },//current: live stats for now
    lastWeek: simulateLastWeek,//lastWeek: simulated past values for comparison
    growth: {//growth: percentage change from last week to now
      individuals: calculateGrowth(total, simulateLastWeek.individuals),
      organizations: calculateGrowth(organizations, simulateLastWeek.organizations),
      men: calculateGrowth(men, simulateLastWeek.men),
      women: calculateGrowth(women, simulateLastWeek.women),
    },
    increase: {//increase: raw number difference (how many more users compared to last week)
      individuals: total - simulateLastWeek.individuals,
      organizations: organizations - simulateLastWeek.organizations,
      men: men - simulateLastWeek.men,
      women: women - simulateLastWeek.women,
    },
  };
});

const statsSlice = createSlice({
  name: "stats",//Names the slice "stats".
  initialState: {
    data: null,//data: will hold the fetched stats
    loading: false,//loading: to show a loader while data is being fetched
    error: null,//error: to store any error message if the API fails
  },
  reducers: {},//Empty for now (no regular reducers).
  extraReducers: (builder) => {//extraReducers: handles the lifecycle (pending, fulfilled, rejected) of async thunks.
    builder
      .addCase(fetchStats.pending, (state) => {//When the fetch starts → set loading to true.
        state.loading = true;
      })
      .addCase(fetchStats.fulfilled, (state, action) => {//When fetch succeeds → set loading to false and store the data.
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchStats.rejected, (state, action) => {//If fetch fails → set loading to false and store the error message.
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default statsSlice.reducer;
