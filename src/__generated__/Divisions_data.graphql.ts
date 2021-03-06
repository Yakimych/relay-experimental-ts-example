/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Divisions_data = {
    readonly allDivisions: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly name: string;
                readonly isDeleted: boolean;
            };
        } | null> | null;
    };
    readonly " $refType": "Divisions_data";
};
export type Divisions_data$data = Divisions_data;
export type Divisions_data$key = {
    readonly " $data"?: Divisions_data$data;
    readonly " $fragmentRefs": FragmentRefs<"Divisions_data">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "Divisions_data",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "allDivisions",
      "storageKey": null,
      "args": null,
      "concreteType": "DivisionConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "DivisionEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "Division",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "id",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "name",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ClientExtension",
                  "selections": [
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "isDeleted",
                      "args": null,
                      "storageKey": null
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
(node as any).hash = 'b2a20694030d5113197b3bf008093643';
export default node;
