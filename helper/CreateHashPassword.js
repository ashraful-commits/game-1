import bcryptjs from "bcryptjs"
 const makeHashPassword = async (password) => {
  const salt = await bcryptjs.genSaltSync(10);
  const hashPass = bcryptjs.hash(password, salt);
  return hashPass;
};

export default makeHashPassword