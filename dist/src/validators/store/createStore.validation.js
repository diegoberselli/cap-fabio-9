"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const yup = __importStar(require("yup"));
const createStoretValidation = {
    schema: {
        body: {
            yupSchema: yup.object().shape({
                branch: yup.string().required("branch name is required"),
                state: yup.string().required("state name is required"),
                city: yup.string().required("city name is required"),
                street: yup.string().required("street name is required"),
                district: yup.string().required("district name is required"),
                number: yup.string().required("number is required"),
                zipcode: yup.string().required("zipCode number is required"),
                phone: yup.string().required("phone number is required"),
            }),
            validateOptions: {
                abortEarly: false,
            },
        },
    },
};
exports.default = createStoretValidation;
