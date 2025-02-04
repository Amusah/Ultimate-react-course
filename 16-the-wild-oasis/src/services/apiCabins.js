import supabase from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("Cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("cabins could not be loaded");
  }

  // console.log(data);
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase
    .from("Cabins")
    .delete()
    .eq("some_column", "someValue");

  if (error) {
    console.log(error);
    throw new Error("Cabin could not be deleted");
  }

  return data;
}
