# Reviews Module (`src/features/Reviews`)

This module manages user feedback for listings.

## Components to Implement:
1.  **ReviewList.jsx**:
    - Display list of reviews on a listing.
    - Show average star rating.

2.  **ReviewForm.jsx**:
    - Form to submit a review (only for users who have booked).
    - Star Rating input (1-5 stars).
    - Text area for comments.

## Backend Integration:
- `POST /api/reviews`
- `GET /api/reviews/:listingId`
