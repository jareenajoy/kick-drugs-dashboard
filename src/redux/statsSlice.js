import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUsers } from '../services/api';

export const fetchStats = createAsyncThunk("stats/fetchStats", async () => {
  const users = await fetchUsers();
  const total = users.length;
  const organizations = Math.floor(total * 0.2);
  const men = Math.floor(total * 0.65);
  const women = total - men;

  const simulateLastWeek = {
    individuals: total - Math.floor(Math.random() * 5 + 1),
    organizations: organizations - Math.floor(Math.random() * 3 + 1),
    men: men - Math.floor(Math.random() * 4 + 1),
    women: women - Math.floor(Math.random() * 4 + 1),
  };

  const calculateGrowth = (current, previous) =>
    (((current - previous) / (previous || 1)) * 100).toFixed(1);

  return {
    current: { individuals: total, organizations, men, women },
    lastWeek: simulateLastWeek,
    growth: {
      individuals: calculateGrowth(total, simulateLastWeek.individuals),
      organizations: calculateGrowth(organizations, simulateLastWeek.organizations),
      men: calculateGrowth(men, simulateLastWeek.men),
      women: calculateGrowth(women, simulateLastWeek.women),
    },
    increase: {
      individuals: total - simulateLastWeek.individuals,
      organizations: organizations - simulateLastWeek.organizations,
      men: men - simulateLastWeek.men,
      women: women - simulateLastWeek.women,
    },
  };
});

const statsSlice = createSlice({
  name: "stats",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStats.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchStats.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchStats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default statsSlice.reducer;
