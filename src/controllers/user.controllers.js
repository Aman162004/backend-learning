import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';

const registerUser = asyncHandler(async (req, res) => {
    // your code here
    res.status(200).json({
        message: "Aman Raj Kushwaha"
    });
});

export { registerUser };