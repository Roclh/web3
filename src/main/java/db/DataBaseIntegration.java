package db;

import beans.Point;
import javafx.beans.DefaultProperty;
import lombok.Builder;
import lombok.NoArgsConstructor;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import sun.security.krb5.Config;

import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.ManagedBean;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.transaction.Transactional;

import org.hibernate.cfg.Configuration;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;


@ManagedBean(name = "DBI", eager = true)
@ApplicationScoped
@NoArgsConstructor
public class DataBaseIntegration {

    @PersistenceContext(unitName = "Point")
    private EntityManager entityManager;

    @Transactional
    public void addPoint(Point point){
        entityManager.persist(point);
        entityManager.flush();
    }

    public List<Point> getAllPoints(){
        CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
        CriteriaQuery<Point> query = criteriaBuilder.createQuery(Point.class);
        query.select(query.from(Point.class));
        return entityManager.createQuery(query).getResultList();
    }
}
