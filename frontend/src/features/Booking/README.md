# Booking Module (`src/features/Booking`)

This module handles the entire reservation flow.

## Components to Implement:
1.  **BookingWidget.jsx**:
    - Placed on the Listing Details page.
    - Date picker (Range).
    - Guest count selector.
    - Price calculation summary.
    - "Reserve" button.

2.  **CheckoutPage.jsx**:
    - Review trip details.
    - Payment form (Credit Card input mock).
    - "Confirm and Pay" action.

## Redux Integration:
- `bookingSlice.js` to manage the collection of selected dates/guests before DB submission.
