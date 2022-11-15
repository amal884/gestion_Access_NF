import {Validators} from "@angular/forms";
import {demandeur} from "./demandeur.model";
import {Byte} from "@angular/compiler/src/util";

export interface Demande{
  id : number;
  ANP : Boolean
  SOMAPORT : Boolean;
  MARSAMAROC : Boolean;
  PORTNET : Boolean
  MASSCEREALES :Boolean
  ONCF :Boolean;
  OCP : Boolean;
  TC3 : Boolean;
  DGSN : Boolean;
  PROTECTIONCIVIL : Boolean;
  ONSA : Boolean;
  CHANTIERNAVAL : Boolean;
  MOULAYYOUSSEF : Boolean;
  demandeurDto: demandeur;
  badgeType:String;



}
