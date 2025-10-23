const dropdownData = {
  nameDropdown: ["Asper", "Kajol", "Nabila", "Arafamim"],
  instituteDropdown: ["MIST(Gazipur)", "Chittagong Polytechnic", "Sylhet Polytechnic"],
  rollDropdown: ["101", "102", "103", "104"],
  dateDropdown: ["21 Oct 2025", "22 Oct 2025", "23 Oct 2025"],
  toolsDropdown: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  workDropdown: ["Assignment", "Practice Task", "Project", "HW"],
};


Object.keys(dropdownData).forEach(id => {
  const container = document.getElementById(id);
  const btn = document.createElement("button");
  btn.textContent = id.replace("Dropdown", "").toUpperCase();
  const content = document.createElement("div");
  content.className = "dropdown-content";
  const list = document.createElement("div");
  list.className = "selected-list";

  dropdownData[id].forEach(item => {
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = item;
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(" " + item));
    content.appendChild(label);

    checkbox.addEventListener("change", () => {
      list.innerHTML = "";
      const selected = Array.from(content.querySelectorAll("input:checked")).map(cb => cb.value);
      selected.forEach(val => {
        const chip = document.createElement("span");
        chip.className = "chip";
        chip.textContent = val;
        list.appendChild(chip);
      });
    });
  });

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    document.querySelectorAll(".dropdown-content").forEach(el => el.style.display = "none");
    content.style.display = content.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", () => {
    content.style.display = "none";
  });

  container.appendChild(btn);
  container.appendChild(content);
  container.appendChild(list);
});

const submitBtn = document.getElementById("submitBtn");
const tableContainer = document.getElementById("tableContainer");
const tableBody = document.querySelector("#dataTable tbody");

submitBtn.addEventListener("click", () => {
  tableContainer.classList.remove("hidden");
});

function createRow() {
  const row = document.createElement("tr");
  Object.keys(dropdownData).forEach(id => {
    const selected = Array.from(document.querySelectorAll(`#${id} input:checked`))
      .map(cb => cb.value).join(", ");
    const cell = document.createElement("td");
    cell.textContent = selected || "-";
    row.appendChild(cell);
  });

  const actionCell = document.createElement("td");
  const actions = document.createElement("div");
  actions.className = "row-actions";

  const insertBtn = document.createElement("button");
  insertBtn.textContent = "Insert";
  insertBtn.onclick = createRow;

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.onclick = () => alert("Edit feature coming soon!");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => row.remove();

  actions.append(insertBtn, editBtn, deleteBtn);
  actionCell.appendChild(actions);
  row.appendChild(actionCell);
  tableBody.appendChild(row);
}

submitBtn.addEventListener("click", createRow);
