import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchListings = createAsyncThunk(
  "listings/fetchAll",
  async (filters = {}, { rejectWithValue }) => {
    try {
      let query = "?";
      if (filters.search) query += `search=${filters.search}&`;
      if (filters.category) query += `category=${filters.category}&`;

      const response = await axios.get(
        `http://localhost:8000/api/listings${query}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchListingById = createAsyncThunk(
  "listings/fetchOne",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/listings/${id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const listingSlice = createSlice({
  name: "listings",
  initialState: {
    listings: [],
    currentListing: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListings.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchListings.fulfilled, (state, action) => {
        state.loading = false;
        state.listings = action.payload;
      })
      .addCase(fetchListings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchListingById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchListingById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentListing = action.payload;
      })
      .addCase(fetchListingById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default listingSlice.reducer;
