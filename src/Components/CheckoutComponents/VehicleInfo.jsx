import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    cardNumber: Yup.string()
        .matches(/^\d{16}$/, 'Card number must be 16 digits')
        .required('Card number is required'),
    expiryDate: Yup.string()
        .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Expiry date must be in MM/YY format')
        .required('Expiry date is required'),
    cvv: Yup.string()
        .matches(/^\d{3,4}$/, 'CVV must be 3 or 4 digits')
        .required('CVV is required'),
});

const VehicleInfo = ({ defaultVehicle }) => {
    const initialValues = {
        VehicleNumber: defaultVehicle?.num || '',
        VehcileName: defaultVehicle?.name || '',
        VehcileType: defaultVehicle?.type || '',
        agree: false, // Initialize the checkbox value
    };

    const handleSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    };

    return (
        <div className="max-w-md ">
            <h2 className="text-xl font-bold max-sm:text-base mb-4 px-4">Vehicle Information</h2>
            <div className='px-6'>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <div className="flex mb-4 items-center">
                            <div className="flex-1 mr-4">
                                <Field
                                    type="text"
                                    id="VehcileNumber"
                                    name="VehcileNumber"
                                    placeholder="Vehicle number"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                />
                                <ErrorMessage name="VehcileNumber" component="div" className="text-red-500 mt-1" />
                            </div>

                            <div className="flex-1 mr-4">
                                <Field
                                    type="text"
                                    id="VehcileName"
                                    name="VehcileName"
                                    placeholder="Vehicle Name"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                />
                                <ErrorMessage name="VehcileName" component="div" className="text-red-500 mt-1" />
                            </div>

                            <div className="flex-1">
                                <Field
                                    type="text"
                                    id="VehcileType"
                                    name="VehcileType"
                                    placeholder="Vehicle Type"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                />
                                <ErrorMessage name="VehcileType" component="div" className="text-red-500 mt-1" />
                            </div>
                        </div>
                        <div className="flex items-center mb-4">
                            <Field
                                type="checkbox"
                                id="agree"
                                name="agree"
                                className="mr-2"
                            />
                            <label htmlFor="agree" className="text-sm text-gray-600">I want to fill different Vehciles data </label>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default VehicleInfo;
