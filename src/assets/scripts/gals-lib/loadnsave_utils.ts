import type { Projeto } from "@/stores/projetoStore";
import { Options } from "./generator/Options";
import salvador from '@/assets/scripts/saver'
import { nonTerminalsFromGrammar } from '@/assets/scripts/gals-functions'

function parseV1(fileName: string, id: number, content: string): Projeto {

  const splitResultado: string[] = content.split(
    /#Options\n|\n#RegularDefinitions\n|\n#Tokens\n|\n#NonTerminals\n|\n#Grammar\n/
  );

  const newProject = {
    id,
    fileName,
    options:            splitResultado[1] == undefined ? '' : splitResultado[1],
    regularDefinitions: splitResultado[2] == undefined ? '' : splitResultado[2],
    tokens:             splitResultado[3] == undefined ? '' : splitResultado[3],

	dirty: false,

    nonTerminals:
      splitResultado[4] == undefined
      ? ''
      : splitResultado[4]
      .split('\n')
      .filter((str) => !str.startsWith('//'))[0]
      .trim(),

    grammar: splitResultado[5] == undefined ? '' : splitResultado[5],

    textSimulator: '',
    consoleExit:   '',

    optionsGals:
      splitResultado[1] == undefined
      ? new Options()
      : new Options().constructorFromString(
        splitResultado[1] == undefined ? '' : splitResultado[1]
      )
  };

  return newProject
}

function parseV2(fileName: string, id: number, content: string): Projeto {

  const separated  = content.split(/%%%VERSION [0-9]+%%%\n|#SimulatorText/);
  const subcontent = separated[1];

  let v1proj = parseV1(fileName, id, subcontent);

  v1proj.textSimulator = atob(separated[2])

  return v1proj;
}

function getVersion(content: string): number {
  return parseInt(content.split(/%%%VERSION|%%%/)[1]);
}

export function parseFileFromString(fileName: string, id: number, content: string): Projeto {

  let version = -1;
  if (content[0] == "%" && content[1] == "%" && content[2] == "%")
  {
    version = getVersion(content);

    switch (version) {
      case 1:
        throw new Error(`.gals não deve ter cabeçalho de versão`);
      case 2:
        return parseV2(fileName, id, content);
      default:
        throw new Error(`.vgls versão ${version} não suportado.`);
    }
  }
  else
  {
    let namesplit = fileName.split(/\./);

    if (namesplit[namesplit.length - 1] === "gals")
    {
      fileName = ""
      for (let i = 0; i <= namesplit.length - 2; i++)
        fileName += namesplit[i] + ".";
      fileName += "vgls"
    }

    return parseV1(fileName, id, content);
  }

}

export function saveFile(project: Projeto) {

  const options            = project.options
  const objOptions         = project.optionsGals
  const regularDefinitions = project.regularDefinitions
  const tokens             = project.tokens
  const nonTerminals       = project.nonTerminals
  const grammar            = project.grammar

  let codigo = '';

  codigo += "%%%VERSION 2%%%\n"

  codigo += '#Options\n' + (options == undefined ? '' : objOptions.toString()) + '\n'

  codigo += '#RegularDefinitions\n' +
    (regularDefinitions == undefined ? '' : regularDefinitions) + '\n';

  codigo += '#Tokens\n' + (tokens == undefined ? '' : tokens) + '\n';

  codigo += '#NonTerminals\n' +
    (nonTerminals == undefined ? '' : nonTerminalsFromGrammar(nonTerminals, grammar)) + '\n'

  codigo += '#Grammar\n' + (grammar == undefined ? '' : grammar) + '\n'

  codigo += "#SimulatorText\n" + btoa(project.textSimulator)

  salvador.download(codigo, project.fileName, '.vgls')

  project.dirty = false;
}
