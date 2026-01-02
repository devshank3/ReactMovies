function exportedFunction() {
  console.log("This is an exported function.");
  internalFunction
}

function internalFunction() {
    console.log("This is an internal function.");
}


let globalConfiguration = {
    setting1: true,
    setting2: "default"
};


export default function anotherExportedFunction() {
    console.log("This is another exported function.");
}

export { exportedFunction, globalConfiguration };