<Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {card.icon}
          {card.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {card.items.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 hover:bg-accent rounded-md cursor-pointer"
              onClick={() => onItemClick?.(card.id, item)}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center">
                  {item.icon || <ExternalLink className="h-4 w-4 text-primary" />}
                </div>
                <div>
                  <p className="font-medium text-sm">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.author}</p>
                </div>
              </div>
              <div className="text-right">
                <Badge variant="secondary" className="text-xs">
                  {item.type}
                </Badge>
                <p className="text-xs text-muted-foreground mt-1">{item.modified}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>