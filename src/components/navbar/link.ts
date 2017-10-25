export class Link {
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get path(): string {
    return this._path;
  }

  set path(value: string) {
    this._path = value;
  }

  get iconClass(): string {
    return this._iconClass;
  }

  set iconClass(value: string) {
    this._iconClass = value;
  }

  get hasLeaf(): boolean {
    return this._hasLeaf;
  }

  set hasLeaf(value: boolean) {
    this._hasLeaf = value;
  }

  get children(): Link[] {
    return this._children;
  }

  set children(value: Link[]) {
    this._children = value;
  }

  private _name: string;
  private _path: string;
  private _iconClass: string;
  private _hasLeaf: boolean = false;
  private _children: Link[] = [];

  constructor(name: string, path: string, iconClass: string, hasLeaf: boolean, children: Link[]) {
    this._name = name;
    this._path = path;
    this._iconClass = iconClass;
    this._hasLeaf = hasLeaf;
    this._children = children;
  }
}
