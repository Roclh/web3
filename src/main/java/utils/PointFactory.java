package utils;

import beans.DataBean;
import beans.Point;

import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.ManagedBean;

@ManagedBean(name = "pointFactory")
@ApplicationScoped
public class PointFactory {
    public Point buildPoint(DataBean bean){
        Point point=new Point();
        point.setX(bean.getX());
        point.setY(bean.getY());
        point.setR(bean.getR());
        point.setResult(bean.check());
        return point;
    }
}
