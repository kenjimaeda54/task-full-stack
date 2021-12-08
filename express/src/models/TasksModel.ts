import { model, Schema, SchemaDefinitionProperty } from "mongoose";

export interface ITasksModel {
  // Um endereço de controle de acesso ao meio de um dispositivo
  //seja dispositivo mobile,desktop,tablet,etc
  macaddress: string;
  type: number;
  title: string;
  description: string;
  when: Date;
  done: boolean;
  created: SchemaDefinitionProperty<Date>;
}

const taskSchema = new Schema<ITasksModel>({
  macaddress: { type: String, required: true },
  type: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  when: { type: Date, required: true },
  done: { type: Boolean, default: false },
  //aqui sera automaticamente criado o campo created
  //entao nao preciso colocar required: true
  created: { type: Date, default: Date.now() },
});

//primeiro parametro e o nome da tabela no banco de dados
//segundo parametro e o schema
const TasksModel = model<ITasksModel>("Task", taskSchema);

export { TasksModel };
