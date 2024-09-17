"use server";
import dbConnect from "@/lib/mongodb";
import { Contact } from "@/models/contractus";
export const contactAction = async (formdata) => {
  await dbConnect();
  try {
    const response = await Contact.create(formdata);
    console.log(response);
    return JSON.parse(JSON.stringify(response))
  } catch (error) {
    console.log(error);
    return null;
  }
};
