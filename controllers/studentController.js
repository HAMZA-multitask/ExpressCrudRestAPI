import StudentModel from "../models/studentCrud.js";

class StudentController {
    static createDoc = async (req, res) => {
        try {
            const {name, age, fees} = req.body
            const doc = new StudentModel({
                name: name,
                age: age,
                fees: fees
            })
            const result = await doc.save()
            res.status(201).send(result)
        } catch (error) {
            console.log('error', error)
        } 
    }

    static getAllDoc = async (req, res) => {
        try {
            const result = await StudentModel.find();
            res.send(result)
        } catch (error) {
            console.log('error', error)
        }
    }

    static getSingleDocById = async(req, res) => {
        try {
            const result = await StudentModel.findById(req.params.id)
            res.send(result)
        } catch (error) {
            console.log('error', error)
        }
    }

    static updateDocById = async (req, res) => {
        try {
            const result = await StudentModel.findByIdAndUpdate(req.params.id, req.body)
            res.send(result)
        } catch (error) {
            console.log('error', error)
        }
    }

    static deleteDocById = async(req, res) => {
        try {
        const result = await StudentModel.findByIdAndDelete(req.params.id)
        res.status(204).send(result)
        } catch(error) {
            console.log(error)
        }
    }
}

export default StudentController