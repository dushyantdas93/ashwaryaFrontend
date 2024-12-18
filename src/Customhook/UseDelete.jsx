
import axios from "axios";

import { host } from "../utils/constant";
import toast from "react-hot-toast";

export const useDelete = () => {


  // Function to delete an item
  const deleteItem = async (itemId,url) => {
    try {
    
      const res = await axios.delete(
        `${host}/admin/${url}/delete/${itemId}`
      );

      if (res && res.data.success) {
        toast.success(res.data.message); // Show success toast
      } else {
        toast.error(res.data.message); // Show error toast
      }
    } catch (error) {
      toast.error("Something went wrong");
      
    } 
  };

  return {
    deleteItem
    
  };
};
